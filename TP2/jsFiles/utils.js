function switchTab(tabIndex) {
    // Cacher tous les onglets
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    // Désélectionner tous les boutons d'onglet
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.setAttribute('aria-selected', 'false');
    });
    // Afficher l'onglet sélectionné
    var selectedTab = document.getElementById('tab-content-' + tabIndex);
    selectedTab.classList.add('active');
    // Sélectionner le bouton d'onglet correspondant
    var selectedTabButton = document.querySelector('.tab-button:nth-of-type(' + tabIndex + ')');
    selectedTabButton.setAttribute('aria-selected', 'true');
}