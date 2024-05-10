import CatCard from './CatCard';

export default {
    component: CatCard,
    title: "CatCard",
    tags: ["autodocs"]
}

export const Default = {
    args: {
        id: 1,
        name: "Fluffy",
        breed: "Domestic Shorthair",
        friendliness_level: 3,
        suitable_for: 'all',
        description: "Test description",
        has_owner: false,
        owner_id: null,
        image: 'https://mpfjenxcxczsqdcydqtk.supabase.co/storage/v1/object/public/catapp-pics/emmy_cat.png',
        area: 'Manhattan'

    }
}