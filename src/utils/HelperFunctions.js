import parse from 'html-react-parser';



export const processesdText = (data) => {
    let val = parse(data)
    console.log("parsed", val)
    console.log("org", val)
    // return val.substring(0,VALUES.LIMIT)+"..."
    return parse(data)
}

export const processedDate = (data) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date(data)
    return date.getDate() + ' ' + monthNames[date.getMonth()]  + ' ' + date.getFullYear()
}

export const extractContent=(s)=> {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };