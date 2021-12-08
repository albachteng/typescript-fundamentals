const phonesArray = [
    {id: '001', phone: 8675309}, {id: '002', phone: 6107246367}
];

function arrayToDict<T>(arr: T[], idGen: (arg: T) => string): {[k: string]: T} {
    const dict: {[k: string]: T} = {};
    
    arr.forEach((item) => {
        const dictKey = idGen(item);
        dict[dictKey] = item;
    });

    return dict;
}

console.log(arrayToDict(phonesArray, (ph) => ph.id));

