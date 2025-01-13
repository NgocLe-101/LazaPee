'use strict';

const category = require("../models/category");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('product', [
            // Shop 1 - Đồ điện tử
            {
                id: 1,
                productName: 'Samsung Galaxy A20',
                brand: 'Samsung',
                shop_id: 1,
                thumbnail: 'http://res.cloudinary.com/dlao1onv5/image/upload/v1736592332/meygmpbds3ioddr3qgld.png',
                description: 'High-end smartphone with stunning display.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 2,
                productName: 'Laptop HP Probook 430-G1',
                brand: 'HP',
                shop_id: 1,
                thumbnail: 'http://res.cloudinary.com/dlao1onv5/image/upload/v1736592672/ganfxwvt3qcthffzbf9j.jpg',
                description: 'Powerful laptop for work and gaming.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 3,
                productName: 'Tablet UltraTab 10',
                brand: 'BrandJ',
                shop_id: 1,
                thumbnail: 'http://res.cloudinary.com/dlao1onv5/image/upload/v1736592782/jgytsoykiwduxmluppo8.jpg',
                description: 'Lightweight tablet with high resolution.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 4,
                productName: 'Smartwatch Active 2',
                brand: 'BrandK',
                shop_id: 1,
                thumbnail: 'http://res.cloudinary.com/dlao1onv5/image/upload/v1736592916/cvqfmxbkk3ziwpfljzql.jpg',
                description: 'Stylish smartwatch with health tracking.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 5,
                productName: 'Earbuds tws 43',
                brand: 'BrandL',
                shop_id: 1,
                thumbnail: 'http://res.cloudinary.com/dlao1onv5/image/upload/v1736593106/gznm0sugcy9hqxouk48k.jpg',
                description: 'Noise-cancelling wireless earbuds.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 6,
                productName: 'Acer predator helios 300',
                brand: 'BrandM',
                shop_id: 1,
                thumbnail: 'http://res.cloudinary.com/dlao1onv5/image/upload/v1736593221/tjp9bbkwrwarfmorhovm.png',
                description: 'High-performance laptop for gamers.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 7,
                productName: 'Desktop Monitor UltraView',
                brand: 'BrandN',
                shop_id: 1,
                thumbnail: 'https://example.com/images/ultraview_thumbnail.jpg',
                description: 'Wide-screen monitor for professional use.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 8,
                productName: 'Gaming Headset HyperSound',
                brand: 'BrandO',
                shop_id: 1,
                thumbnail: 'https://example.com/images/hypersound_thumbnail.jpg',
                description: 'Immersive sound quality for gaming.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 9,
                productName: 'External SSD Drive 1TB',
                brand: 'BrandP',
                shop_id: 1,
                thumbnail: 'https://example.com/images/ssd1tb_thumbnail.jpg',
                description: 'Portable high-speed SSD drive.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 10,
                productName: 'Digital Camera VisionX',
                brand: 'BrandQ',
                shop_id: 1,
                thumbnail: 'https://example.com/images/visionx_thumbnail.jpg',
                description: 'Compact digital camera with 4K video.',
                category_id: 1,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            // Đồ gia dụng - Shop 2
            {
                id: 11,
                productName: 'Vacuum Cleaner X200',
                brand: 'BrandR',
                shop_id: 2,
                thumbnail: 'https://example.com/images/vacuumx200_thumbnail.jpg',
                description: 'High-power vacuum cleaner with multiple attachments.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 12,
                productName: 'Air Purifier CleanAir',
                brand: 'BrandS',
                shop_id: 2,
                thumbnail: 'https://example.com/images/cleanair_thumbnail.jpg',
                description: 'Advanced air purifier for healthy living.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 13,
                productName: 'Blender PowerMix 500',
                brand: 'BrandT',
                shop_id: 2,
                thumbnail: 'https://example.com/images/powermix500_thumbnail.jpg',
                description: 'Multi-purpose blender for smoothies and more.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 14,
                productName: 'Microwave Oven HeatWave',
                brand: 'BrandU',
                shop_id: 2,
                thumbnail: 'https://example.com/images/heatwave_thumbnail.jpg',
                description: 'Efficient microwave with multiple cooking modes.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 15,
                productName: 'Electric Kettle FastBoil',
                brand: 'BrandV',
                shop_id: 2,
                thumbnail: 'https://example.com/images/fastboil_thumbnail.jpg',
                description: 'Quick and energy-efficient electric kettle.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 16,
                productName: 'Toaster ToastPro 300',
                brand: 'BrandW',
                shop_id: 2,
                thumbnail: 'https://example.com/images/toastpro300_thumbnail.jpg',
                description: 'Compact toaster with browning control.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 17,
                productName: 'Dishwasher AquaClean',
                brand: 'BrandX',
                shop_id: 2,
                thumbnail: 'https://example.com/images/aquaclean_thumbnail.jpg',
                description: 'Energy-efficient dishwasher for spotless cleaning.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 18,
                productName: 'Refrigerator CoolMax 500L',
                brand: 'BrandY',
                shop_id: 2,
                thumbnail: 'https://example.com/images/coolmax500l_thumbnail.jpg',
                description: 'Spacious refrigerator with frost-free technology.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 19,
                productName: 'Ceiling Fan WindFlow 52',
                brand: 'BrandZ',
                shop_id: 2,
                thumbnail: 'https://example.com/images/windflow52_thumbnail.jpg',
                description: 'Silent ceiling fan with remote control.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 20,
                productName: 'Washing Machine TurboWash',
                brand: 'BrandA',
                shop_id: 2,
                thumbnail: 'https://example.com/images/turbowash_thumbnail.jpg',
                description: 'High-efficiency washing machine with quick wash feature.',
                category_id: 2,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            // Đồ chơi - Shop 3
            {
                id: 21,
                productName: 'Building Blocks Set',
                brand: 'BrandB',
                shop_id: 3,
                thumbnail: 'https://example.com/images/buildingblocks_thumbnail.jpg',
                description: 'Colorful building blocks for creative play.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 22,
                productName: 'Remote Control Car X-Speed',
                brand: 'BrandC',
                shop_id: 3,
                thumbnail: 'https://example.com/images/rc_car_xspeed_thumbnail.jpg',
                description: 'High-speed remote control car with rechargeable battery.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 23,
                productName: 'Dollhouse DreamVilla',
                brand: 'BrandD',
                shop_id: 3,
                thumbnail: 'https://example.com/images/dreamvilla_thumbnail.jpg',
                description: 'Luxurious dollhouse with detailed furniture.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 24,
                productName: 'Plush Toy BunnySoft',
                brand: 'BrandE',
                shop_id: 3,
                thumbnail: 'https://example.com/images/bunnysoft_thumbnail.jpg',
                description: 'Adorable and soft bunny plush toy.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 25,
                productName: 'Educational Puzzle ABC',
                brand: 'BrandF',
                shop_id: 3,
                thumbnail: 'https://example.com/images/educationalpuzzle_thumbnail.jpg',
                description: 'Interactive puzzle set for learning the alphabet.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 26,
                productName: 'Toy Kitchen Set MiniChef',
                brand: 'BrandG',
                shop_id: 3,
                thumbnail: 'https://example.com/images/minichef_thumbnail.jpg',
                description: 'Realistic kitchen set for imaginative cooking play.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 27,
                productName: 'Action Figure HeroX',
                brand: 'BrandH',
                shop_id: 3,
                thumbnail: 'https://example.com/images/herox_thumbnail.jpg',
                description: 'Collectible action figure with movable joints.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 28,
                productName: 'Board Game AdventureQuest',
                brand: 'BrandI',
                shop_id: 3,
                thumbnail: 'https://example.com/images/adventurequest_thumbnail.jpg',
                description: 'Exciting board game for the whole family.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 29,
                productName: 'Lego Robotics Kit',
                brand: 'BrandJ',
                shop_id: 3,
                thumbnail: 'https://example.com/images/legorobotics_thumbnail.jpg',
                description: 'Robotics kit for kids to build and program robots.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 30,
                productName: 'Art and Craft Kit CreativeFun',
                brand: 'BrandK',
                shop_id: 3,
                thumbnail: 'https://example.com/images/creativefun_thumbnail.jpg',
                description: 'Comprehensive art and craft kit for young artists.',
                category_id: 3,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 31,
                productName: 'T-Shirt Classic Fit',
                brand: 'BrandL',
                shop_id: 3,
                thumbnail: 'https://example.com/images/classicfit_tshirt_thumbnail.jpg',
                description: 'Comfortable cotton T-shirt in multiple colors.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 32,
                productName: 'Denim Jeans Slim Fit',
                brand: 'BrandM',
                shop_id: 3,
                thumbnail: 'https://example.com/images/slimfit_jeans_thumbnail.jpg',
                description: 'Stylish slim-fit denim jeans for casual wear.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 33,
                productName: 'Leather Jacket MotoStyle',
                brand: 'BrandN',
                shop_id: 3,
                thumbnail: 'https://example.com/images/motostyle_jacket_thumbnail.jpg',
                description: 'Premium leather jacket for a bold look.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 34,
                productName: 'Hoodie Winter Warm',
                brand: 'BrandO',
                shop_id: 3,
                thumbnail: 'https://example.com/images/winterwarm_hoodie_thumbnail.jpg',
                description: 'Cozy hoodie perfect for cold weather.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 35,
                productName: 'Formal Shirt SlimFit',
                brand: 'BrandP',
                shop_id: 3,
                thumbnail: 'https://example.com/images/slimfit_shirt_thumbnail.jpg',
                description: 'Elegant slim-fit formal shirt for office wear.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 36,
                productName: 'Sports Shorts ActiveWear',
                brand: 'BrandQ',
                shop_id: 3,
                thumbnail: 'https://example.com/images/activewear_shorts_thumbnail.jpg',
                description: 'Breathable sports shorts for active lifestyle.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 37,
                productName: 'Polo Shirt Premium',
                brand: 'BrandR',
                shop_id: 3,
                thumbnail: 'https://example.com/images/premium_polo_thumbnail.jpg',
                description: 'Classic polo shirt with a premium finish.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 38,
                productName: 'Skirt ElegantFlow',
                brand: 'BrandS',
                shop_id: 3,
                thumbnail: 'https://example.com/images/elegantflow_skirt_thumbnail.jpg',
                description: 'Elegant skirt for casual and formal occasions.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 39,
                productName: 'Tracksuit FlexPro',
                brand: 'BrandT',
                shop_id: 3,
                thumbnail: 'https://example.com/images/flexpro_tracksuit_thumbnail.jpg',
                description: 'Comfortable tracksuit for training and lounging.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 40,
                productName: 'Dress SummerBreeze',
                brand: 'BrandU',
                shop_id: 3,
                thumbnail: 'https://example.com/images/summerbreeze_dress_thumbnail.jpg',
                description: 'Light and airy summer dress for sunny days.',
                category_id: 4,
                status: 'available',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('product', null, {});
    },
};
