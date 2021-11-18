export interface IAbility {

    id: number,
    name: string,
    effect_entries: [
        {
            effect: string,
            language: {
                name: string,
                url: string
            },
            short_effect: string
        },
    ]
}