/**
 * Fields object
 */
const Fields = [
    {
        name: 'fullname',
        type: 'input',
        subtype: 'text',
        label: 'Nombre',
        value: '',
        required: true
    },
    {
        name: 'age',
        type: 'input',
        subtype: 'number',
        label: 'Edad',
        value: '',
        required: true
    },
    {
        name: 'email',
        type: 'input',
        subtype: 'email',
        label: 'Email',
        value: '',
        required: false
    },
    {
        name: 'from',
        type: 'select',
        label: 'Localidad',
        value: '',
        required: true,
        options: [
            {value: '1', text: 'CDMX'},
            {value: '2', text: 'Edo. Mex.'},
            {value: '3', text: 'Foraneo'}
        ]
    },
    {
        name: 'comments',
        type: 'textarea',
        label: 'Comentarios',
        value: '',
        required: false
    }
];

export default Fields;