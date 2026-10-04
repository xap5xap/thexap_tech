from __future__ import annotations

import argparse
import html
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, HRFlowable


ROOT = Path(__file__).resolve().parents[4]
OUT = ROOT / 'output/pdf'
parser = argparse.ArgumentParser(description='Build the saved G2i resume PDF and Markdown.')
parser.add_argument('--font-dir', type=Path, required=True, help='Directory containing LiberationSans-Regular.ttf and LiberationSans-Bold.ttf')
FONTS = parser.parse_args().font_dir
PDF = OUT / 'xavier-perez-g2i-resume.pdf'
SOURCE = Path(__file__).with_name('resume.md')
CREDENTIAL = 'https://www.credly.com/badges/76109aff-0ac5-414c-bc87-fde0ac44bc78/public_url'
EMAIL = ''
PHONE = ''

summary = (
    'Software engineer with 15+ years of experience. Owns full-stack delivery across product '
    'decisions, architecture, interfaces, APIs, and cloud infrastructure. Uses Codex and Claude '
    'Code to coordinate engineering work, with hands-on review of AI-generated code, trade-offs, and test evidence.'
)
skills = [
    ('Application systems', 'JavaScript, TypeScript, React, Next.js, Node.js, Hono, Go, PostgreSQL, MongoDB'),
    ('Cloud and integrations', 'AWS CDK, Lambda, EventBridge, API Gateway, REST, GraphQL, OAuth, webhooks'),
    ('Engineering workflow', 'Codex, Claude Code, technical review, unit, integration, and end-to-end testing'),
]
experience = []
work = [
    ('Full-stack development and AWS infrastructure', 'Upwork client engagement | Delivered', [
        'Delivered frontend and backend work using React, Next.js, and MongoDB, with AWS CDK, Lambda, EventBridge, and API Gateway.',
        'Used Codex and Claude Code orchestration as part of the delivery workflow.',
    ]),
    ('Full-stack architecture and API integrations', 'Private practice operations platform | Client product in use', [
        'Led discovery, UX, architecture, and full-stack delivery. Replaced a growing spreadsheet workflow with a dedicated application now used as the owner\'s primary system.',
        'Built the React/TypeScript UI, Node.js/Hono API, PostgreSQL data layer, and Google Calendar integration. Used Codex and Claude Code for implementation and testing, with direct review.',
    ]),
    ('Full-stack development and system reliability', 'Caregiver coordination and Android display | Owned product in development', [
        'Led research, UX, architecture, and full-stack delivery across a React/TypeScript caregiver interface, Go/PostgreSQL service, and Android display application.',
        'Directed Codex and Claude Code workflows and reviewed code and tests. Verified offline, stale-data, recovery, and restart behavior using synthetic data and an Android emulator.',
    ]),
]
education = [
    ("Master's degree in Marketing", 'Universidad de las Fuerzas Armadas', '2014-2016'),
    ('Bachelor of Engineering in Systems and Information', 'Escuela Politécnica del Ejército', '2002-2007'),
]
metrics = '15,309 hours on Upwork | 100% Job Success | Top Rated Plus | 29 total jobs'
contact = ' | '.join(x for x in ['Quito, Ecuador', EMAIL, PHONE] if x)

pdfmetrics.registerFont(TTFont('ResumeSans', str(FONTS / 'LiberationSans-Regular.ttf')))
pdfmetrics.registerFont(TTFont('ResumeSans-Bold', str(FONTS / 'LiberationSans-Bold.ttf')))
pdfmetrics.registerFontFamily('ResumeSans', normal='ResumeSans', bold='ResumeSans-Bold')

styles = {
    'name': ParagraphStyle('Name', fontName='ResumeSans-Bold', fontSize=32, leading=35, textColor=colors.black, spaceAfter=4),
    'title': ParagraphStyle('Title', fontName='ResumeSans', fontSize=13, leading=16, textColor=colors.black, spaceAfter=5),
    'contact': ParagraphStyle('Contact', fontName='ResumeSans', fontSize=10.2, leading=13, textColor=colors.HexColor('#555555'), spaceAfter=8),
    'body': ParagraphStyle('Body', fontName='ResumeSans', fontSize=10.4, leading=13.5, textColor=colors.HexColor('#202124'), spaceAfter=4),
    'section': ParagraphStyle('Section', fontName='ResumeSans-Bold', fontSize=10.2, leading=13, textColor=colors.black, spaceBefore=9, spaceAfter=6, keepWithNext=True),
    'role': ParagraphStyle('Role', fontName='ResumeSans-Bold', fontSize=11, leading=14, textColor=colors.black, spaceAfter=2, keepWithNext=True),
    'small': ParagraphStyle('Small', fontName='ResumeSans', fontSize=10, leading=12.5, textColor=colors.HexColor('#555555'), spaceAfter=4, keepWithNext=True),
    'bullet': ParagraphStyle('Bullet', fontName='ResumeSans', fontSize=10.4, leading=13.5, textColor=colors.HexColor('#202124'), leftIndent=11, firstLineIndent=-8, spaceAfter=3),
}
story = []

def para(text: str, style: str = 'body', markup: bool = False):
    return Paragraph(text if markup else html.escape(text), styles[style])

def heading(text: str):
    story.append(para(text.upper(), 'section'))

def bullet(text: str):
    return para('- ' + text, 'bullet')

contact_links = (
    html.escape(contact)
    + ' | <link href="https://www.thexap.com/" color="#444444">thexap.com</link>'
    + ' | <link href="https://www.upwork.com/freelancers/xavierperez" color="#444444">upwork.com/freelancers/xavierperez</link>'
)
story.extend([para('Xavier Perez', 'name'), para('Senior Full-Stack Product Engineer', 'title'), para(contact_links, 'contact', markup=True)])
story.append(HRFlowable(width='100%', thickness=1.6, color=colors.HexColor('#c57924'), spaceAfter=11, hAlign='LEFT'))
story.append(para(summary))

heading('Experience')
story.append(para('Independent Senior Full-Stack Product Engineer', 'role'))
story.append(para('Upwork client engagements | 2016-Present', 'small'))
story.append(para('<b>15,309 hours</b> on Upwork | <b>100% Job Success</b> | <b>Top Rated Plus</b> | 29 total jobs', 'small', markup=True))
story.extend(bullet(text) for text in experience)

heading('Selected engineering work')
for title, details, bullets in work:
    story.append(KeepTogether([para(title, 'role'), para(details, 'small'), *[bullet(text) for text in bullets], Spacer(1, 2)]))

heading('Technical skills')
for label, details in skills:
    story.append(para(f'<b>{html.escape(label)}:</b> {html.escape(details)}', markup=True))

heading('Education')
for degree, school, dates in education:
    story.append(para(f'<b>{html.escape(degree)}</b> | {html.escape(school)} | {dates}', markup=True))

heading('Certification and languages')
story.append(para(f'<b>AWS Certified AI Practitioner</b> | April 2026-April 2029 | <link href="{CREDENTIAL}" color="#333333">Credential</link>', markup=True))
story.append(para('English: Fluent, verified on Upwork | Spanish: Native'))

OUT.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(str(PDF), pagesize=letter, rightMargin=43, leftMargin=43, topMargin=36, bottomMargin=36, title='Xavier Perez Resume', author='Xavier Perez', subject='Software engineering resume for G2i AI Evals', creator='Xavier Perez', pageCompression=1)
doc.build(story)

lines = ['# Xavier Perez', '', 'Senior Full-Stack Product Engineer', '', contact + ' | [thexap.com](https://www.thexap.com/) | [upwork.com/freelancers/xavierperez](https://www.upwork.com/freelancers/xavierperez)', '', summary]
lines.extend(['', '## Experience', '', '**Independent Senior Full-Stack Product Engineer**', '', 'Upwork client engagements | 2016-Present', '', metrics, ''])
lines.extend('- ' + text for text in experience)
lines.extend(['', '## Selected engineering work', ''])
for title, details, bullets in work:
    lines.extend(['**' + title + '**', '', details, ''])
    lines.extend('- ' + text for text in bullets)
    lines.append('')
lines.extend(['## Technical skills', ''])
lines.extend(f'- **{label}:** {details}' for label, details in skills)
lines.extend(['', '## Education', ''])
for degree, school, dates in education:
    lines.extend([f'**{degree}**', '', f'{school} | {dates}', ''])
lines.extend(['## Certification and languages', '', f'**AWS Certified AI Practitioner** | April 2026-April 2029 | [Credential]({CREDENTIAL})', '', 'English: Fluent, verified on Upwork | Spanish: Native', ''])
SOURCE.write_text('\n'.join(lines), encoding='utf-8')
print(PDF)
print(SOURCE)
