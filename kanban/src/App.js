import React from "react";
import initialData from "./initial-data";
import Column from './Components/column.jsx'
import '@atlaskit/css-reset'
import { DragDropContext} from 'react-beautiful-dnd'
import styled from "styled-components";

//TODO: Add redux
import { onDragEndHandler } from "./Handlers/dndHandler";


const Container = styled.div`
  display: flex;
`;

class App extends React.Component {
  state = initialData;

  
onDragEndHandlerCall = result => {
  //state is saved in global memory + local memory of onDragHandler :(
  this.setState(onDragEndHandler(result, this.state))
}
  

  render(){
    return(
      <DragDropContext 
      onDragEnd={this.onDragEndHandlerCall}
      >
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Container>
      </DragDropContext>
    )
  }
}

export default App;
