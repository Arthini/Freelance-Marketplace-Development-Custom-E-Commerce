
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the product ID from the URL parameter
const productId = getUrlParameter('id');

// Define product data (you can load this dynamically from a server)
const products = {
    '1': {
        name: 'Product 1',
        price: '₹5000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'
    },
    '2': {
        name: 'Product 2',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'

    },
    '3': {
        name: 'Product 3',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'

    },
    '4': {
        name: 'Product 4',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'

    },
    '5': {
        name: 'Product 5',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'

    }
    , '6': {
        name: 'Product 6',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'

    },
    '7': {
        name: 'Product 7',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'

    },
    '8': {
        name: 'Product 8',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'

    },
    '9': {
        name: 'Product 9',
        price: '₹4000',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit perspiciatis atque corrupti fugit, modi, dicta ipsa tenetur aut quis blanditiis saepe! Ex, ipsa excepturi autem nesciunt numquam eos culpa.',
        imageSrc:'../images/ai.jpg'

    }

    // Add more products here as needed
};

// Get the product information based on the product ID
const productInfo = products[productId];

if (productInfo) {
    // Update the product details on the page
    document.getElementById('product-title').textContent = productInfo.name;
    document.getElementById('product-price').textContent = `Price: ${productInfo.price}`;
    document.getElementById('product-description').textContent = `Description: ${productInfo.description}`;
    document.getElementById('product-image').src = productInfo.imageSrc;

}
