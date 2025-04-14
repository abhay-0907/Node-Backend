let people = require('../people-data');
const getPeople = (req, res) => {
    const { name } = req.params;
    res.status(200).json({ success: true, data: people, searchedName: name });
}

const postPerson = (req,res)=>{

    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:"Please provide credentails"});
    }
    res.status(201).json({success:true,person:name});
}

const postmanPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        res.status(401).json({success:false,msg:"please provide credentials"})
    } 
    res.status(200).json({success:true,data:[...people,name]})
}

const updatePerson = (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const personid =  people.find((e)=>{return e.id===Number(id)});
    if(!personid){
        return res.status(404).send(`Person id = ${id} doesn't exist`);
    }

    const newPeople = people.map((e)=>{
        if(e.id===Number(id)){
            e.name = name;
        }
        return e
    })
    res.status(200).json({success:true,data:newPeople});
}

const deletePerson = function(req,res){
    const {id} = req.params;
    const {name} = req.body;

    const personId = people.find((e)=>e.id===Number(id));

    if(!personId){
        return res.status(404).send(`Oops! Wrong ID`);
    }

    const newPerson = people.filter((e)=>{
        return e.id !==Number(id); 
    })
    res.status(200).json({success:true,newPerson});
}


module.exports = {
    getPeople,
    postPerson,
    postmanPerson,
    updatePerson,
    deletePerson,
}