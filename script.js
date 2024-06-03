document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
});

const fetchCategories = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        displayCategories(data.categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('mainCategories');
    categoriesContainer.innerHTML = '';
    const heading=document.getElementById('heading');
    heading.innerHTML='CATEGORIES';
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `
            <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
            <button>${category.strCategory.toUpperCase()}</button>
        `;
        categoryDiv.onclick = () => fetchMealsByCategory(category.strCategory);
        categoriesContainer.appendChild(categoryDiv);
    });
};