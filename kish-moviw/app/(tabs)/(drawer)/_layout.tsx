import Drawer from 'expo-router/drawer'

const _layout = () => {
  return (
    <Drawer>
        <Drawer.Screen name="home" options={{}} />
        <Drawer.Screen name="favorites" options={{}} />
        
  
    </Drawer>
  )
}

export default _layout



{/* <Stack>
        <Stack.Screen name="index" options={{ title: "Overview" }} />
        <Stack.Screen
          name="details"
          options={{ title: "Details" }}
        />
      </Stack> */}