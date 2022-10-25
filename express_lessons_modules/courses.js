/*this file simumulates a data base*/
let courses = {
    programming: [
        {
            id: 1,
            title: 'learn python',
            language: 'python', 
            views: 568974,
            level: 'basic',

        },
        {
            id: 2,
            title: 'learn C',
            language: 'C',
            views: 12354,
            level:'medium',
        },
        {
            id: 3,
            title: 'javascript',
            language: 'javascript',
            views: 65432,
            level:'hard',
        }
    ],
    maths: [
        {
            id: 1,
            title:'maths',
            language:'maths',
            views: 256123,
            level: 'hard',

        },
        {
            id: 2,
            title:'algebra',
            language:'maths',
            views: 125436,
            level: 'hard',

        }
    ]
}

module.exports.courses = courses;