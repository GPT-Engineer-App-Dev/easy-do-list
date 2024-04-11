import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Checkbox, Heading, VStack } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: input,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  return (
    <VStack p={4}>
      <Heading mb="8">Todo List</Heading>
      <Box>
        <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} size="md" mr={2} />
        <Button onClick={handleAddTask} leftIcon={<FaPlus />} colorScheme="blue">
          Add
        </Button>
      </Box>
      <List spacing={3} mt={4} w="100%">
        {tasks.map((task) => (
          <ListItem key={task.id} display="flex" justifyContent="space-between" alignItems="center">
            <Checkbox isChecked={task.isCompleted} onChange={() => handleToggleTask(task.id)}>
              {task.text}
            </Checkbox>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} colorScheme="red" aria-label="Delete task" />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
