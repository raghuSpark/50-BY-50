const panels = document.querySelectorAll('.panel');

let prevActivePanel = panels[0];

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        prevActivePanel.classList.remove('active');
        panel.classList.add('active');
        prevActivePanel = panel;
    });
});