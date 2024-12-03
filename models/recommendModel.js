const seedData = {
    total_size: 5,
    type_id: 1, // Loại sản phẩm, ví dụ: 1 là cà phê
    offset: 0,
    products: [
        {
            id: 1,
            name: 'Tai nghe Bluetooth',
            description: 'Tai nghe không dây chất lượng cao, âm thanh sống động, thời gian pin lâu.',
            price: 500000, // Giá: 500,000 VNĐ
            stars: 4.5,
            img: 'images.jpg', // Đường dẫn ảnh
            location: 'China', // Nguồn gốc
            created_at: '2024-11-30T10:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 1, // Loại sản phẩm: 1 là tai nghe
        },
        {
            id: 2,
            name: 'Sạc dự phòng',
            description: 'Sạc nhanh, dung lượng lớn, phù hợp cho mọi thiết bị di động.',
            price: 600000,
            stars: 4.8,
            img: 'sac.jpg',
            location: 'Japan',
            created_at: '2024-11-30T11:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 2, // Loại sản phẩm: 2 là sạc
        },
        {
            id: 3,
            name: 'Bàn phím cơ',
            description: 'Bàn phím cơ cao cấp, switch êm ái, thiết kế RGB đẹp mắt.',
            price: 1500000,
            stars: 5.0,
            img: 'ban-phim-co-cidoo-abm098-tri-mode.jpg',
            location: 'USA',
            created_at: '2024-11-30T12:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 3, // Loại sản phẩm: 3 là bàn phím
        },
        {
            id: 4,
            name: 'Chuột gaming',
            description: 'Chuột chơi game có độ nhạy cao, thiết kế công thái học.',
            price: 800000,
            stars: 4.7,
            img: 'cot.jpg',
            location: 'Germany',
            created_at: '2024-11-30T13:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 4, // Loại sản phẩm: 4 là chuột
        },
        {
            id: 5,
            name: 'Ốp lưng điện thoại',
            description: 'Ốp lưng chống sốc, thiết kế thời trang, phù hợp nhiều dòng máy.',
            price: 200000,
            stars: 4.6,
            img: 'op lg.jpg',
            location: 'Vietnam',
            created_at: '2024-11-30T14:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 5, // Loại sản phẩm: 5 là ốp lưng
        },
    ],
};

module.exports = seedData;
