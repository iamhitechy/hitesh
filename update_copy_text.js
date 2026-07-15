import fs from 'fs';

function updateCopyButton(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Search for the existing onClick block
  const searchRegex = /onClick=\{\(e\) => \{[\s\S]*?setTimeout\(\(\) => \{ svg\.innerHTML = originalHTML; \}, 1500\);\s*\}\}/g;

  const replacement = `onClick={(e) => {
                    const button = e.currentTarget;
                    const pre = button.closest('figure').querySelector('pre');
                    if (pre) {
                      const text = pre.textContent;
                      if (navigator.clipboard && window.isSecureContext) {
                        navigator.clipboard.writeText(text).catch(()=>{});
                      } else {
                        const textArea = document.createElement("textarea");
                        textArea.value = text;
                        textArea.style.position = "absolute";
                        textArea.style.left = "-999999px";
                        document.body.appendChild(textArea);
                        textArea.select();
                        try { document.execCommand("copy"); } catch (err) {}
                        textArea.remove();
                      }
                    }
                    
                    const originalHTML = button.innerHTML;
                    button.innerHTML = '<span style="font-size: 10px; padding: 0 4px; font-weight: bold;">Copied!</span>';
                    setTimeout(() => { button.innerHTML = originalHTML; }, 2000);
                  }}`;

  content = content.replace(searchRegex, replacement);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated copy button in ${filePath}`);
}

updateCopyButton('c:/Users/hites/OneDrive/Desktop/portfolio/src/pages/BlogDetail.jsx');
updateCopyButton('c:/Users/hites/OneDrive/Desktop/portfolio/src/pages/BlogPerformanceOptimization.jsx');
