from pathlib import Path
p=Path('app/index.html')
s=p.read_text(encoding='utf-8')
if 'data/demo-cards.js' not in s:
    s=s.replace('</body>','<script src="data/demo-cards.js"></script>\n<script src="app/maxcred-engine.js"></script>\n</body>')
p.write_text(s,encoding='utf-8')
print('MaxCred engine wired')
