function addCopyright() {
    const copyrightDiv = document.createElement('div');
    copyrightDiv.style.cssText = `
        text-align: right;
        color: #666;
        font-size: 1.4vh;
        position: fixed;
        bottom: 10px;
        right: 10px;
        font-family: 'Roboto', Arial, sans-serif;
    `;
    copyrightDiv.innerHTML = `© ${new Date().getFullYear()} Yufan Liu. All rights reserved.`;
    document.body.appendChild(copyrightDiv);
}

document.addEventListener('DOMContentLoaded', addCopyright);