export default {
    title:'Article',
    name:'article',
    type:'document',
    fields:[
       {
        title:'Title',
        name:'title',
        type:'string',
        validation: Rule=>Rule.required()
       } ,
       {
        title:'Price',
        name:'price',
        type:'number',
        validation: Rule=>Rule.required()
    } , {
        title:'Description',
        name:'description',
        type:'string',
        validation: Rule=>Rule.required()
    } ,{
        title:'Content',
        name:'content',
        type:'array',
        of: [
            {
                type:'block'
            },
            {
                type:'image'
            }
        ]
    },
       
    ]
}