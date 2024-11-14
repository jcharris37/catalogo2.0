// Ejemplo de base de datos de imágenes
const imagesDatabase = {
    'hombre-s': Array.from({ length: 50 }, (_, index) => `images/sueter_hombre_s_${index + 1}.jpg`),
    'hombre-m': Array.from({ length: 50 }, (_, index) => `images/sueter_hombre_m_${index + 1}.jpg`),
    'hombre-l': Array.from({ length: 50 }, (_, index) => `images/sueter_hombre_l_${index + 1}.jpg`),
    'hombre-xl': Array.from({ length: 50 }, (_, index) => `images/sueter_hombre_xl_${index + 1}.jpg`),
    'damas': Array.from({ length: 50 }, (_, index) => `images/sueter_damas${index + 1}.jpg`),
    'parejas': Array.from({ length: 36 }, (_, index) => `images/sueter_parejas_${index + 1}.jpg`),
    'Estampados': Array.from({ length: 50 }, (_, index) => `images/sueter_estampados_${index + 1}.jpg`),
    'camisillas': Array.from({ length: 7 }, (_, index) => `images/sueter_camisilla_${index + 1}.jpg`)
};

// Función para alternar la visibilidad del menú
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
}

function loadImages(category) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    const images = imagesDatabase[category];
    if (images) {
        images.forEach((imageSrc, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `Suéter ${category} ${index + 1}`;
            
            const title = document.createElement('h4');
            title.textContent = `Suéter ${category.toUpperCase()} #${index + 1}`;
            
            const price = document.createElement('p');
            if (category === 'parejas') {
                price.textContent = '$65.000';  
            } else if (category === 'Estampados') {
                price.textContent = '$45.000';  
            } else if (category === 'camisillas') {
                price.textContent = '$37.000';  
            } else {
                price.textContent = '$35.000';  
            }
            
            productDiv.appendChild(img);
            productDiv.appendChild(title);
            productDiv.appendChild(price);
            
            productContainer.appendChild(productDiv);
        });
    } else {
        productContainer.innerHTML = '<p>No se encontraron productos para esta categoría.</p>';
    }
}
