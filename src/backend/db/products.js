import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    title: "Crayola play Dough",
    description: "A 5 oz pack of play dough",
    price: 500,
    category: "crafting",
    discountPrice: 300,
    brand: "crayola",
    totalRating: 253,
    totalStars: 1,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173463/itsy-ecom/crayola_5_oz_pack_of_play_dough_pack_of_3_-_rs_299_u3urvj.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Crayola colour pencils",
    description: "Pack of 24 colour pencils",
    price: 2000,
    category: "pens",
    discountPrice: 1200,
    brand: "crayola",
    totalRating: 321,
    totalStars: 1,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173491/itsy-ecom/crayola_colour_pencils_set_of_24_-_rs_1117_mdf3da.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Crayola erasable colour pencils",
    description: "Pack of 10 erasable colour pencils",
    price: 1500,
    category: "pens",
    discountPrice: 1000,
    brand: "crayola",
    totalRating: 196,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173501/itsy-ecom/crayola_erasable_colored_pencils_set_of_10_-_rs990_f4qhmh.jpg",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: false,
      newArrival: true,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Crayola glitter markers",
    description: "Pack of 6 glitter markers",
    price: 1800,
    category: "pens",
    discountPrice: 1200,
    brand: "crayola",
    totalRating: 276,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173509/itsy-ecom/crayola_glitter_markers_pack_of_6_-_rs1019_slalnw.jpg",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: false,
      newArrival: true,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Crayola paint brushes",
    description: "Pack of 5 brushes",
    price: 1500,
    category: "crafting",
    discountPrice: 1000,
    brand: "crayola",
    totalRating: 186,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173516/itsy-ecom/crayola_paint_brushes_set_of_5_-_rs_1273_cnkmd2.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Crayola construction paper",
    description: "Pack 48 construction papers",
    price: 1600,
    category: "crafting",
    discountPrice: 1400,
    brand: "crayola",
    totalRating: 186,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173537/itsy-ecom/crayola_set_of_48_construction_paper_-_rs_1312_cfqu0w.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Crayola twistable coloured pencils",
    description: "Pack of 50 twistable colored pencils",
    price: 2500,
    category: "pens",
    discountPrice: 2100,
    brand: "crayola",
    totalRating: 300,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173543/itsy-ecom/crayola_twistable_colored_pencils_set_of_50_-_rs_2163_xn2kkm.jpg",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Crayola washable markers",
    description: "Pack of 40 washable markers",
    price: 2600,
    category: "pens",
    discountPrice: 2200,
    brand: "crayola",
    totalRating: 230,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173549/itsy-ecom/crayola_washable_markers_set_of_40_-_rs_1669_c8oiio.jpg",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: false,
      newArrival: true,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Crayola washable crayons",
    description: "Pack 3 palm grasp washable crayons",
    price: 1500,
    category: "crafting",
    discountPrice: 1000,
    brand: "crayola",
    totalRating: 360,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173554/itsy-ecom/crayola_washable_palm_grasp_crayons_set_of_3_-_rs_1459_qtwxib.webp",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: false,
      newArrival: true,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Crayola water colours",
    description: "Set of 24 water colours with brush",
    price: 1700,
    category: "paints",
    discountPrice: 1300,
    brand: "crayola",
    totalRating: 250,
    totalStars: 2,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173561/itsy-ecom/crayola_water_colors_with_paint_brush_set_of_24_-_rs1234_slcbof.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Crayola modeling clay",
    description: "No bake air dry modeling clay 25lb",
    price: 5000,
    category: "crafting",
    discountPrice: 4500,
    brand: "crayola",
    totalRating: 289,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173568/itsy-ecom/crayols_air_dry_modeling_clay_25lb_-_rs_4593_bammbo.jpg",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell colour pencils",
    description: "Pack of 24 triangular colour pencils",
    price: 500,
    category: "pens",
    discountPrice: 300,
    brand: "faber castell",
    totalRating: 579,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173577/itsy-ecom/Faber_castell_-_24_triangular_colour_pencis_p7xlfs.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: true,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell watercolor pad",
    description: "A3 watercolor pad",
    price: 700,
    category: "crafting",
    discountPrice: 500,
    brand: "faber castell",
    totalRating: 629,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173581/itsy-ecom/Faber_castell_A3_watercolor_pad_-_rs_600_zrnav8.jpg",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: true,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell acrylic paints",
    description: "Set of 12 acrylic paints",
    price: 900,
    category: "paints",
    discountPrice: 600,
    brand: "faber castell",
    totalRating: 438,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173587/itsy-ecom/faber_castell_arcylic_colors_set_of_12_-_rs_520_rqbnbt.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell colour pencils",
    description: "Set of 48 colour pencils",
    price: 700,
    category: "pens",
    discountPrice: 500,
    brand: "faber castell",
    totalRating: 534,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173593/itsy-ecom/Faber_castell_colour_me_grip_pencil_set_of_48_d4ucfu.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell colored markers",
    description: "Set of 4 multi coloured markers",
    price: 300,
    category: "pens",
    discountPrice: 200,
    brand: "faber castell",
    totalRating: 234,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173598/itsy-ecom/Faber_castell_multi_colored_markers_-_set_of_4_ri5fte.jpg",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell notebook",
    description: "Notebook with 160 pages",
    price: 200,
    category: "stationery",
    discountPrice: 100,
    brand: "faber castell",
    totalRating: 144,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173603/itsy-ecom/Faber_castell_notebook_-_160_pages_-_rs_100_ovx4wk.jpg",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell artist pens",
    description: "Set of 6 soft brush artist pens",
    price: 700,
    category: "crafting",
    discountPrice: 600,
    brand: "faber castell",
    totalRating: 674,
    totalStars: 1,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173612/itsy-ecom/Faber_castell_pitt_artist_pen_color_pens_set_of_6_-_rs_600_esdtyk.webp",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: false,
      newArrival: true,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell pastel pencils",
    description: "Set of 12 pastel pencils",
    price: 1500,
    category: "pens",
    discountPrice: 1300,
    brand: "faber castell",
    totalRating: 345,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173619/itsy-ecom/faber_castell_pitt_pencil_set_of_12_-_rs_1350_ktehb2.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell poster colors",
    description: "Set of 12 poster pencils",
    price: 300,
    category: "paints",
    discountPrice: 200,
    brand: "faber castell",
    totalRating: 185,
    totalStars: 2,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173626/itsy-ecom/faber_castell_poster_color_set_of_12_-_rs_185_xxzg8g.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell rollerball pen",
    description: "Set of 3 rollerball pens",
    price: 1200,
    category: "pens",
    discountPrice: 1000,
    brand: "faber castell",
    totalRating: 295,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173634/itsy-ecom/faber_castell_rollerball_pen_black_set_of_3_-_rs_900_dxsare.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell watercolor pencils",
    description: "Set of 120 watercolor pencils",
    price: 28000,
    category: "pens",
    discountPrice: 25000,
    brand: "faber castell",
    totalRating: 175,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173640/itsy-ecom/faber_castell_watercolour_pencils_set_of_120_-_rs_26000_uhzcgm.webp",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: true,
      newArrival: true,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Faber castell white board marker",
    description: "Set of 4 black white board markers",
    price: 400,
    category: "stationery",
    discountPrice: 300,
    brand: "faber castell",
    totalRating: 428,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173644/itsy-ecom/faber-castell_whit_board_marker_-_rs_249_vveabl.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Maped fineliners",
    description: "Pack of 10 duo tip fineliners",
    price: 300,
    category: "pens",
    discountPrice: 200,
    brand: "maped",
    totalRating: 357,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173655/itsy-ecom/maped_-_fine_liners_pack_of_10_-_rs_206_b5h1bf.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: true,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Maped box cutter",
    description: "18mm box cutter",
    price: 200,
    category: "stationery",
    discountPrice: 100,
    brand: "maped",
    totalRating: 127,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173662/itsy-ecom/maped_18mm_cutter_-_rs_199_i27fhp.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Maped brushes",
    description: "Set of 4 brushes",
    price: 300,
    category: "crafting",
    discountPrice: 200,
    brand: "maped",
    totalRating: 327,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173668/itsy-ecom/maped_brushes_set_of_4_-_rs_85_pclubk.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Maped geometry box",
    description: "Geometry box",
    price: 400,
    category: "stationery",
    discountPrice: 200,
    brand: "maped",
    totalRating: 637,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173675/itsy-ecom/maped_geometry_box_-_rs_150_huykmc.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Maped loopy eraser",
    description: "loopy duo with eraser and sharpener",
    price: 200,
    category: "stationery",
    discountPrice: 100,
    brand: "maped",
    totalRating: 637,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173680/itsy-ecom/maped_loopy_duo_eraser_sharpener_-_rs_105_jby0gj.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Maped fountain pen",
    description: "Set of 2 fountain pens",
    price: 300,
    category: "pens",
    discountPrice: 200,
    brand: "maped",
    totalRating: 837,
    totalStars: 2,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173687/itsy-ecom/maped_pack_of_2_fountain_pen_-_rs_199_hcymee.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Maped stapler",
    description: "Stapler with staple pins",
    price: 200,
    category: "stationery",
    discountPrice: 100,
    brand: "maped",
    totalRating: 237,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173692/itsy-ecom/maped_stapler_-_rs_107_w86i4n.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Maped colour pencils",
    description: "Set of 50 triangular colour pencils",
    price: 800,
    category: "pens",
    discountPrice: 600,
    brand: "maped",
    totalRating: 734,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173697/itsy-ecom/maped_triangular_shaped_color_pencils_-_rs_390_azdyfe.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Maped metallic highlighters",
    description: "Set of 4 metallic highlighters",
    price: 700,
    category: "stationery",
    discountPrice: 500,
    brand: "maped",
    totalRating: 122,
    totalStars: 1,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173704/itsy-ecom/maped-_classic_highlighter_metallic_colours_pack_of_4_-_rs_550_v7diw8.jpg",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: false,
      newArrival: true,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler acrylic paint",
    description: "Set of 24 acrylic paints",
    price: 2100,
    category: "paints",
    discountPrice: 1800,
    brand: "staedtler",
    totalRating: 347,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173720/itsy-ecom/staedtler_acrylic_pain_tubes_set_of_24_-_rs_1800_nl6xnf.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: true,
      newArrival: true,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler eraser",
    description: "dust free art eraser",
    price: 200,
    category: "stationery",
    discountPrice: 100,
    brand: "staedtler",
    totalRating: 237,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173725/itsy-ecom/staedtler_eraser_-_rs_130_hsy6yk.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler fineliners",
    description: "Pack of 30 fineliners",
    price: 2500,
    category: "pens",
    discountPrice: 2300,
    brand: "staedtler",
    totalRating: 327,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173730/itsy-ecom/staedtler_fineliners_pack_of_30_-_rs_2225_ur5zts.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler pencils",
    description: "Pack of 12 drawing pencils",
    price: 1300,
    category: "pens",
    discountPrice: 1000,
    brand: "staedtler",
    totalRating: 227,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173736/itsy-ecom/staedtler_pencils_pack_of_12_-_rs_1099_qenqku.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler scissors",
    description: "14cm scissors",
    price: 300,
    category: "stationery",
    discountPrice: 200,
    brand: "staedtler",
    totalRating: 632,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173743/itsy-ecom/staedtler_scissors_-_rs_149_ynkqyq.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler highlighters",
    description: "Pack of 6 highlighters",
    price: 400,
    category: "stationery",
    discountPrice: 300,
    brand: "staedtler",
    totalRating: 278,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173749/itsy-ecom/staedtler-_highlighters_pack_of_6_-_515_fuakso.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler sharpener",
    description: "Single pencil tub sharpener",
    price: 900,
    category: "stationery",
    discountPrice: 700,
    brand: "staedtler",
    totalRating: 135,
    totalStars: 3,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173753/itsy-ecom/staedtler-_mars_single_pencil_tub_sharpeners_-_rs_950_rbdoif.webp",
    qty: 1,
    offers: {
      fastDelivery: false,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: false,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler triplus fineliners",
    description: "Pack of 10 triplus fineliners",
    price: 1200,
    category: "pens",
    discountPrice: 900,
    brand: "staedtler",
    totalRating: 367,
    totalStars: 4,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173756/itsy-ecom/staedtler-_triplus_fineliner_pack_of_10_-_rs_990_hcjzkr.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
  {
    _id: uuid(),
    title: "Staedtler pigment liner",
    description: "Pack of 8 black pigment liners and mechanical pencil",
    price: 1600,
    category: "pens",
    discountPrice: 1300,
    brand: "staedtler",
    totalRating: 135,
    totalStars: 5,
    img: "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649173761/itsy-ecom/staedtler-pigment_liner_pack_of_8_with_pencil_-_1599_etqsik.webp",
    qty: 1,
    offers: {
      fastDelivery: true,
      freeDelivery: false,
      newArrival: false,
      inStock: true,
      bestSeller: true,
    },
  },
];
