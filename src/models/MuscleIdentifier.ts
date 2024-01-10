/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const MuscleIdentifier = {
    Omohyoid: 'omohyoid',
    LevatorScapulae: 'levatorScapulae',
    Sternohyoid: 'sternohyoid',
    Sternocleidomastoid: 'sternocleidomastoid',
    PectoralisMajor: 'pectoralisMajor',
    PectoralisMinor: 'pectoralisMinor',
    Deltoid: 'deltoid',
    Brachialis: 'brachialis',
    BicepsBrachii: 'bicepsBrachii',
    TricepsBrachii: 'tricepsBrachii',
    PronatorTeres: 'pronatorTeres',
    PalmarisLongus: 'palmarisLongus',
    ExtensorPollicisBrevis: 'extensorPollicisBrevis',
    ExtensorPollicisLongus: 'extensorPollicisLongus',
    AbductorPollicisLongus: 'abductorPollicisLongus',
    FlexorCarpiRadialis: 'flexorCarpiRadialis',
    Brachioradialis: 'brachioradialis',
    FlexorCarpiUlnaris: 'flexorCarpiUlnaris',
    ExtensorCarpiUlnaris: 'extensorCarpiUlnaris',
    SerratusAnterior: 'serratusAnterior',
    InternalOblique: 'internalOblique',
    ExternalOblique: 'externalOblique',
    RectusAdbominis: 'rectusAdbominis',
    Transversalis: 'transversalis',
    Sartorius: 'sartorius',
    Piriformis: 'piriformis',
    Pectineus: 'pectineus',
    AdductorLongus: 'adductorLongus',
    AdductorBrevis: 'adductorBrevis',
    Gracilis: 'gracilis',
    TensorFasciaeLatae: 'tensorFasciaeLatae',
    VastusMedialis: 'vastusMedialis',
    RectusFemoris: 'rectusFemoris',
    VastusIntermedius: 'vastusIntermedius',
    VastusLateralis: 'vastusLateralis',
    Gastrocnemius: 'gastrocnemius',
    Soleius: 'soleius',
    TibialisAnterior: 'tibialisAnterior',
    TibialisPosterior: 'tibialisPosterior',
    PeroneusLongus: 'peroneusLongus',
    PeroneusBrevis: 'peroneusBrevis',
    ExtensorDigitorumLongus: 'extensorDigitorumLongus',
    FlexorHallucisLongus: 'flexorHallucisLongus',
    FlexorDigitorumLongus: 'flexorDigitorumLongus',
    Plantaris: 'plantaris',
    BicepsFemoris: 'bicepsFemoris',
    AdductorMagnus: 'adductorMagnus',
    Semitendinosus: 'semitendinosus',
    Semimembranosus: 'semimembranosus',
    GluteusMinimus: 'gluteusMinimus',
    GluteusMedius: 'gluteusMedius',
    GluteusMaximus: 'gluteusMaximus',
    PsoasMinor: 'psoasMinor',
    PsoasMajor: 'psoasMajor',
    Iliacus: 'iliacus',
    TeresMinor: 'teresMinor',
    TeresMajor: 'teresMajor',
    Infraspinatus: 'infraspinatus',
    RhomboidMinor: 'rhomboidMinor',
    RhomboidMajor: 'rhomboidMajor',
    Trapezius: 'trapezius',
    LatissimusDorsi: 'latissimusDorsi',
    Semispinalis: 'semispinalis',
    ErectorSpinae: 'erectorSpinae',
    Multifidus: 'multifidus'
} as const;
export type MuscleIdentifier = typeof MuscleIdentifier[keyof typeof MuscleIdentifier];


export function MuscleIdentifierFromJSON(json: any): MuscleIdentifier {
    return MuscleIdentifierFromJSONTyped(json, false);
}

export function MuscleIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuscleIdentifier {
    return json as MuscleIdentifier;
}

export function MuscleIdentifierToJSON(value?: MuscleIdentifier | null): any {
    return value as any;
}

