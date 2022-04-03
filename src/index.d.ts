interface attributeItem {
    attribute: string,
    description?: string,
    type?: string,
    acceptedValues?: string,
    default?: string
}
interface eventItem {
    eventName: string,
    description?: string,
    parameters?: string,
}
interface slotItem {
    name: string,
    description?: string,
}
interface methodItem {
    name: string,
    description?: string,
}
interface componentDoc {
    attributes?: attributeItem[],
    events?: eventItem[],
    slots?: slotItem[],
    methods?: methodItem[],
}
interface LabelGroup {
    line: number | undefined,
    tag: string | undefined,
    prefix?: string | undefined
}