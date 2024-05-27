const vehiculos = [
    {
        id: 1,
        nombre: "Auto 1",
        marca: "Toyota",
        modelo: "Corolla",
        motor: "1.8L",
        descripcion: "Un auto compacto y eficiente.",
        imagen: "https://toyota.scene7.com/is/image/toyota/Corolla_2023?wid=1200&hei=600&qlt=70"
    },
    {
        id: 2,
        nombre: "Auto 2",
        marca: "Honda",
        modelo: "Civic",
        motor: "2.0L",
        descripcion: "Un auto con gran desempeño y estilo.",
        imagen: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2023/Civic-Sedan/Photography/US/23-Civic-Sedan-Gallery-01.jpg"
    },
    {
        id: 3,
        nombre: "Auto 3",
        marca: "Ford",
        modelo: "Focus",
        motor: "2.3L",
        descripcion: "Un auto confiable y versátil.",
        imagen: "https://media.ford.com/content/fordmedia/fna/us/en/news/2022/11/07/all-new-2022-ford-focus-st.html/jcr:content/image.img.881.495.jpg/1654784012688.jpg"
    },
    {
        id: 4,
        nombre: "Auto 4",
        marca: "Chevrolet",
        modelo: "Cruze",
        motor: "1.4L",
        descripcion: "Un auto moderno y cómodo.",
        imagen: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/cruze/01-images/2020-chevrolet-cruze-masthead-01.jpg?imwidth=960"
    },
    {
        id: 5,
        nombre: "Auto 5",
        marca: "Nissan",
        modelo: "Altima",
        motor: "2.5L",
        descripcion: "Un auto potente y espacioso.",
        imagen: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/altima/2023/gallery/2023-nissan-altima-front-profile.jpg"
    },
    {
        id: 6,
        nombre: "Auto 6",
        marca: "Hyundai",
        modelo: "Elantra",
        motor: "2.0L",
        descripcion: "Un auto económico y confiable.",
        imagen: "https://www.hyundaiusa.com/us/en/vehicles/elantra/gallery/_jcr_content/section-1/column-1/image-gallery/image9.img.jpg/1689704164457.jpg"
    },
    {
        id: 7,
        nombre: "Auto 7",
        marca: "Mazda",
        modelo: "Mazda3",
        motor: "2.5L",
        descripcion: "Un auto deportivo y eficiente.",
        imagen: "https://www.mazdausa.com/siteassets/vehicles/2023/mazda3/23-mazda3-4d-gallery-exterior-front-34-hero.jpg"
    },
    {
        id: 8,
        nombre: "Auto 8",
        marca: "Volkswagen",
        modelo: "Jetta",
        motor: "1.4L",
        descripcion: "Un auto europeo con estilo.",
        imagen: "https://www.vw.com/content/dam/vwcom/model/my2023/jetta/vw-jetta-2023-gallery-1.jpg"
    },
    {
        id: 9,
        nombre: "Auto 9",
        marca: "Kia",
        modelo: "Forte",
        motor: "2.0L",
        descripcion: "Un auto compacto con gran valor.",
        imagen: "https://www.kia.com/us/content/dam/kia/us/en/vehicles/forte/2023/gallery/2023-Forte-Gallery-04.jpg"
    },
    {
        id: 10,
        nombre: "Auto 10",
        marca: "Subaru",
        modelo: "Impreza",
        motor: "2.0L",
        descripcion: "Un auto con tracción en las cuatro ruedas.",
        imagen: "https://www.subaru.com/content/dam/subaru/2023/impreza-gallery/impreza-2023-exterior-01.jpg"
    },
    {
        id: 11,
        nombre: "Auto 11",
        marca: "BMW",
        modelo: "Serie 3",
        motor: "2.0L",
        descripcion: "Un auto de lujo compacto.",
        imagen: "https://www.bmwusa.com/content/dam/bmwusa/3-series/sedan/2023/BMW-MY23-3-Series-Sedan-Gallery-01.jpg"
    },
    {
        id: 12,
        nombre: "Auto 12",
        marca: "Mercedes-Benz",
        modelo: "Clase C",
        motor: "2.0L",
        descripcion: "Un auto con elegancia y potencia.",
        imagen: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/c/sedan/class-page/c-class-page-studio-chapperone/class-page/c-coupe/2022-C-SEDAN-GALLERY-STUDIO-1-DR.jpg"
    },
    {
        id: 13,
        nombre: "Auto 13",
        marca: "Audi",
        modelo: "A4",
        motor: "2.0L",
        descripcion: "Un auto de lujo con gran rendimiento.",
        imagen: "https://www.audiusa.com/content/dam/nemo/models/a4/a4-sedan/2023/overlays/1920x1080_A4_MY23_gallery_01.jpg"
    },
    {
        id: 14,
        nombre: "Auto 14",
        marca: "Lexus",
        modelo: "IS",
        motor: "2.0L",
        descripcion: "Un auto premium con gran confort.",
        imagen: "https://www.lexus.com/content/dam/lexus/images/models/gallery/IS/2022/2022-lexus-is-gallery-exterior-01-LG.jpg"
    },
    {
        id: 15,
        nombre: "Auto 15",
        marca: "Acura",
        modelo: "TLX",
        motor: "2.4L",
        descripcion: "Un auto de lujo con tecnología avanzada.",
        imagen: "https://www.acura.com/-/media/Acura-Platform/Models/TLX/2023/TLX-Gallery-1.jpg"
    },
    {
        id: 16,
        nombre: "Auto 16",
        marca: "Infiniti",
        modelo: "Q50",
        motor: "3.0L",
        descripcion: "Un auto deportivo de lujo.",
        imagen: "https://www.infinitiusa.com/content/dam/Infiniti/US/vehicles/q50/2023/my23-q50-hero2.jpg"
    },
    {
        id: 17,
        nombre: "Auto 17",
        marca: "Cadillac",
        modelo: "CTS",
        motor: "3.6L",
        descripcion: "Un auto de lujo americano.",
        imagen: "https://media.cadillac.com/content/dam/Media/gmcom/cadillac/en/thumbs/2023/CTS/CT4-V_MY23_Front3QView.jpg"
    },
    {
        id: 18,
        nombre: "Auto 18",
        marca: "Jaguar",
        modelo: "XE",
        motor: "2.0L",
        descripcion: "Un auto británico con estilo.",
        imagen: "https://www.jaguarusa.com/images/2023-jaguar-xe-exterior-07.jpg"
    },
    {
        id: 19,
        nombre: "Auto 19",
        marca: "Tesla",
        modelo: "Model 3",
        motor: "Eléctrico",
        descripcion: "Un auto eléctrico innovador.",
        imagen: "https://tesla-cdn.thron.com/delivery/public/image/tesla/9c3d0c71-b242-41b4-800e-f8dc6895cf56/bvlatuR/std/1920x1080/Model-3-Social"
    },
    {
        id: 20,
        nombre: "Auto 20",
        marca: "Volvo",
        modelo: "S60",
        motor: "2.0L",
        descripcion: "Un auto sueco seguro y elegante.",
        imagen: "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/volvo-s60-gallery-1-04.jpg"
    },
    {
        id: 21,
        nombre: "Auto 21",
        marca: "Genesis",
        modelo: "G70",
        motor: "2.0L",
        descripcion: "Un auto de lujo con gran diseño.",
        imagen: "https://www.genesis.com/content/dam/genesis-p2/my23-g70-sedan/23MY-G70-Gallery-01.jpg"
    },
    {
        id: 22,
        nombre: "Auto 22",
        marca: "Alfa Romeo",
        modelo: "Giulia",
        motor: "2.0L",
        descripcion: "Un auto italiano con gran rendimiento.",
        imagen: "https://www.alfaromeousa.com/content/dam/fca-brands/na/alfaromeo/en_us/2023/giulia/gallery/2023-alfa-romeo-giulia-exterior-01.jpg"
    },
    {
        id: 23,
        nombre: "Auto 23",
        marca: "Porsche",
        modelo: "Macan",
        motor: "2.0L",
        descripcion: "Un SUV deportivo de lujo.",
        imagen: "https://files.porsche.com/filestore/image/multimedia/none/cw-21-lm-2023-detail-vehicle-modelflyaround-macan-image-s-jpeg/normal/cw-21-lm-2023-detail-vehicle-modelflyaround-macan-image-s-jpeg.jpg"
    },
    {
        id: 24,
        nombre: "Auto 24",
        marca: "Land Rover",
        modelo: "Range Rover Evoque",
        motor: "2.0L",
        descripcion: "Un SUV compacto de lujo.",
        imagen: "https://www.landroverusa.com/content/dam/landrover/2022/explore/2023-range-rover-evoque-gallery-10.jpg"
    },
    {
        id: 25,
        nombre: "Auto 25",
        marca: "Maserati",
        modelo: "Ghibli",
        motor: "3.0L",
        descripcion: "Un auto de lujo italiano.",
        imagen: "https://www.maseratiusa.com/content/dam/maserati/international/gallery/2023/ghibli/2023_ghibli_gransport_grey.jpg"
    },
    {
        id: 26,
        nombre: "Auto 26",
        marca: "Ferrari",
        modelo: "Portofino",
        motor: "3.9L",
        descripcion: "Un auto deportivo de lujo.",
        imagen: "https://www.ferrari.com/images/content/FullSize/Main_carousel/PortofinoM-1.jpg"
    },
    {
        id: 27,
        nombre: "Auto 27",
        marca: "Lamborghini",
        modelo: "Huracán",
        motor: "5.2L",
        descripcion: "Un superdeportivo italiano.",
        imagen: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/huracan-sto/2021/gallery/HuracanSTO_01_Mobile.jpg"
    },
    {
        id: 28,
        nombre: "Auto 28",
        marca: "McLaren",
        modelo: "570S",
        motor: "3.8L",
        descripcion: "Un auto deportivo británico.",
        imagen: "https://cars.mclaren.com/content/dam/mclaren-automotive/hub-images/570s-coupe/570s-gallery/570s-gallery-1.jpg"
    },
    {
        id: 29,
        nombre: "Auto 29",
        marca: "Aston Martin",
        modelo: "Vantage",
        motor: "4.0L",
        descripcion: "Un auto de lujo británico.",
        imagen: "https://www.astonmartin.com/images/vantage/gallery/2023-vantage-coupe-image.jpg"
    },
    {
        id: 30,
        nombre: "Auto 30",
        marca: "Bentley",
        modelo: "Continental GT",
        motor: "6.0L",
        descripcion: "Un auto de lujo con gran potencia.",
        imagen: "https://www.bentleymotors.com/content/dam/bentley/Master/Global%20Site%20Assets/Models/Continental%20GT/Gallery/1920x1080_ContinentalGTGallery1.jpg"
    }
];

module.exports = { vehiculos };
