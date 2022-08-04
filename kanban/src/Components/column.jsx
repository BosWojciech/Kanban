import React from "react";
import styled from "styled-components";
import Task from "./task.jsx"
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDragginOver ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height: 100px;
`;



export default class Column extends React.Component{
    render() {
        return(
            <Container>
                <Title>{this.props.column.title}</Title>
                
                <Droppable droppableId={this.props.column.id}>
                {(provided, snapshot) => (
                    <TaskList 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        isDragginOver={snapshot.isDraggingOver}
                    >
                    {this.props.tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                    </TaskList>
                )}
                </Droppable>
                
            </Container>
        )
    }
}