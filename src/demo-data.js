export const notes = [
    {
        id:1,
        title:"Softare Develop",
        coverImage:"https://media.istockphoto.com/id/2090540632/photo/morning-landscape-golden-light-sunrise-and-fog-cover-the-forest.jpg?s=1024x1024&w=is&k=20&c=ILSl-dnGVdMXakz4A7r1FpXHnR0arPovtytWuIxX3Xg=",
        content: " amar sonar bangla ami tomay valobashi .",
        category: 2
    },
    {
        id:2,
        title:"Bazar List",
        coverImage:"https://media.istockphoto.com/id/2090540632/photo/morning-landscape-golden-light-sunrise-and-fog-cover-the-forest.jpg?s=1024x1024&w=is&k=20&c=ILSl-dnGVdMXakz4A7r1FpXHnR0arPovtytWuIxX3Xg=",
        content: " amar sonar bangla ami tomay valobashi .",
        category: 1
    }

]

export const categories = [
    {
        id:1,
        title: "Development",
        notes: [
            1,
            2,
        ]
    } ,
    {
        id: 2,
        title: "Bazar",
        notes: [
            1,
            2,
        ]
    } 
    
]


export const  pageable = {
    current : 7,
    total : 15,
    first : false,
    last : false ,
}