import type { MouseEvent as ReactMouseEvent, RefObject } from "react";
import { useCallback, useEffect, useRef } from "react";
import { useAnalytics } from "./AnalyticsProvider";
import { canonicalTechnology, targetTypeForDimensions, type ProjectTargetType, type SourcePlacement } from "./events";
import type { ProjectContext } from "./contract";

const impressionTargets = new Map<string, ProjectTargetType>();
const selectionKeys = new Set<string>();
const technologyKeys = new Set<string>();

const projectKey = (visitKey: string, project: ProjectContext, placement: SourcePlacement) =>
  `${visitKey}|${project.project_id}|${placement}`;

const chooseTarget = (
  card: HTMLElement | null,
  title: HTMLElement | null
): { element: HTMLElement; targetType: ProjectTargetType } | undefined => {
  if (!card) return undefined;
  const targetType = targetTypeForDimensions(card.getBoundingClientRect().height, window.innerHeight);
  const element = targetType === "project_title_link" ? title : card;
  return element ? { element, targetType } : undefined;
};

export const useProjectLinkTracking = ({
  project,
  placement,
  cardRef,
  titleRef,
  forceTargetType
}: {
  project: ProjectContext;
  placement: SourcePlacement;
  cardRef: RefObject<HTMLElement | null>;
  titleRef: RefObject<HTMLElement | null>;
  forceTargetType?: ProjectTargetType;
}) => {
  const { consent, trackEvent, visitKey } = useAnalytics();

  useEffect(() => {
    if (consent !== "granted" || !visitKey || typeof IntersectionObserver === "undefined") return;
    const key = projectKey(visitKey, project, placement);
    if (impressionTargets.has(key)) return;

    let timer: number | undefined;
    let observer: IntersectionObserver | undefined;
    let observed: HTMLElement | undefined;
    let targetType: ProjectTargetType = "project_card";
    let halfVisible = false;

    const stopTimer = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      timer = undefined;
    };
    const startTimer = () => {
      stopTimer();
      if (!halfVisible || document.visibilityState !== "visible" || impressionTargets.has(key)) return;
      timer = window.setTimeout(() => {
        if (!halfVisible || document.visibilityState !== "visible" || !observed?.isConnected) return;
        const accepted = trackEvent("project_impression", {
          ...project,
          source_placement: placement,
          target_type: targetType
        });
        if (accepted) {
          impressionTargets.set(key, targetType);
          observer?.disconnect();
        }
      }, 1000);
    };
    const connect = () => {
      const forcedElement = forceTargetType === "project_title_link" ? titleRef.current : cardRef.current;
      const target = forceTargetType
        ? forcedElement
          ? { element: forcedElement, targetType: forceTargetType }
          : undefined
        : chooseTarget(cardRef.current, titleRef.current);
      if (!target || impressionTargets.has(key)) return;
      observer?.disconnect();
      stopTimer();
      observed = target.element;
      targetType = target.targetType;
      halfVisible = false;
      observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];
          halfVisible = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.5);
          if (halfVisible) startTimer();
          else stopTimer();
        },
        { threshold: [0.5] }
      );
      observer.observe(target.element);
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible" && halfVisible) startTimer();
      else stopTimer();
    };

    connect();
    const resizeObserver = typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(connect);
    if (cardRef.current) resizeObserver?.observe(cardRef.current);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stopTimer();
      observer?.disconnect();
      resizeObserver?.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [cardRef, consent, forceTargetType, placement, project, titleRef, trackEvent, visitKey]);

  const trackSelection = useCallback(
    (event: ReactMouseEvent<HTMLElement>) => {
      if (consent !== "granted" || !visitKey) return;
      if (event.type === "click" && event.button !== 0) return;
      if (event.type === "auxclick" && event.button !== 1) return;

      const forcedElement = forceTargetType === "project_title_link" ? titleRef.current : cardRef.current;
      const target = forceTargetType
        ? forcedElement
          ? { element: forcedElement, targetType: forceTargetType }
          : undefined
        : chooseTarget(cardRef.current, titleRef.current);
      if (!target) return;
      const key = projectKey(visitKey, project, placement);
      const impressionEligible = impressionTargets.get(key) === target.targetType;
      const selectionKey = `${key}|${target.targetType}`;
      const isFirstSelection = !selectionKeys.has(selectionKey);
      const accepted = trackEvent("select_content", {
        ...project,
        source_placement: placement,
        target_type: target.targetType,
        content_type: "project",
        item_id: project.project_id,
        impression_eligible: impressionEligible,
        is_first_selection: isFirstSelection
      });
      if (accepted) selectionKeys.add(selectionKey);
    },
    [cardRef, consent, forceTargetType, placement, project, titleRef, trackEvent, visitKey]
  );

  return { onClick: trackSelection, onAuxClick: trackSelection };
};

export const useTechnologyExposure = (label: string): RefObject<HTMLElement | null> => {
  const ref = useRef<HTMLElement | null>(null);
  const { consent, pageContext, trackEvent, visitKey } = useAnalytics();
  const technology = canonicalTechnology(label);

  useEffect(() => {
    const project = pageContext.project;
    if (
      consent !== "granted" ||
      !visitKey ||
      !project ||
      !technology ||
      !ref.current ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }
    const key = `${visitKey}|${project.project_id}|${technology}`;
    if (technologyKeys.has(key)) return;
    let timer: number | undefined;
    let halfVisible = false;
    const stop = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      timer = undefined;
    };
    const start = () => {
      stop();
      if (!halfVisible || document.visibilityState !== "visible" || technologyKeys.has(key)) return;
      timer = window.setTimeout(() => {
        if (!halfVisible || document.visibilityState !== "visible" || !ref.current?.isConnected) return;
        const accepted = trackEvent("technology_exposure", {
          ...project,
          technology,
          source_placement: "technology_section",
          target_type: "technology_label"
        });
        if (accepted) {
          technologyKeys.add(key);
          observer.disconnect();
        }
      }, 1000);
    };
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        halfVisible = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.5);
        if (halfVisible) start();
        else stop();
      },
      { threshold: [0.5] }
    );
    const handleVisibility = () => {
      if (document.visibilityState === "visible" && halfVisible) start();
      else stop();
    };
    observer.observe(ref.current);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [consent, label, pageContext.project, technology, trackEvent, visitKey]);

  return ref;
};
