import React from 'react';
import { Box, Text, ThemeContext, grommet} from 'grommet';


const theme= () => (
 
    <ThemeContext.Extend
      value={{
        global: { colors: { custom: '#ff99cc', custom1: '#800080' } },
            
      }}
    >
      <Box pad='large' border={{ side: 'all', color: 'custom1', size: 'medium' }} >
        <Text alignSelf='center' color='custom' weight='bold'>
     
        </Text>
      </Box>
    </ThemeContext.Extend>
    );

    export default theme;