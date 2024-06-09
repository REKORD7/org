import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [showForm, updateShow] = useState(false);
  const [collaborators, updateCollaborators] = useState([{
    id: uuid(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/genesysaluralatam.png",
    name: "Genesys Rondón",
    position: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmaria Quijada",
    position: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    position: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    position: "Dev FullStack",
    fav: true
  }
  ]);

  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ]);
  
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const changeShow = () => {
    updateShow(!showForm);
  }

  //Registrar colaborador
  const addCollaborator = (collaborator) => {
      console.log("Nuevo Colaborador", collaborator);
      //Spread operator
      updateCollaborators([...collaborators,collaborator])
  }

  //Eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("Eliminar Colaborador", id)
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id );
    updateCollaborators(newCollaborators);
  }

  //Actualizar color de equipo
  const updateColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color
      }
      return team
    })

    updateTeams(updatedTeams)
  }

  //Crear equipo
  const addTeam = (newTeam) => {
    console.log(newTeam)
    updateTeams([...teams, {...newTeam, id: uuid() }])
  }

  //
  const like = (id) => {
    console.log("like", id);
    const updatedCollaborators = collaborators.map((collaborator) => {
      if(collaborator.id === id){
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })

    updateCollaborators(updatedCollaborators)
    
  }

  return (
    <div>
      <Header />
      {/* { showForm === true ? <Form /> : <> </>} */}
      { showForm && <Form 
          teams={teams.map((team) => team.title)}
          addCollaborator={addCollaborator}
          addTeam={addTeam}
          /> 
      }

      <MyOrg changeShow={changeShow}/>
      
      {
        teams.map( (team) => <Team 
          data={team} 
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          like={like}
        />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
