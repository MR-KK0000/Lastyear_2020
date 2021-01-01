const testController = {}

testController.testfn = async (req,res) =>{
    try {
        let b = await testallss()
        
        console.log('9999999')
        console.table(b)
        res.status(200).json({status: 1})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

//function
const testallss = async() =>{
    let b = [
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},

        {id: "1",name: "1"},
        {id: "1",name: "1"},
        {id: "1",name: "1"},

    ]

    let dd = []

    b.map( async(r,index) =>{
        console.log("777777")
        dd.push({name: index})
    })
    console.log(dd)
    
    console.log('55555')
    return dd
}



module.exports = testController