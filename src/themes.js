import { createTheme } from '@mui/material/styles';
import sequoiaTheme from "./themes/sequoia";
import apolloTheme from "./themes/apollo";
import masculinePastelTheme from './themes/masculinePastel';

const themes = {
    sequoia: createTheme(sequoiaTheme),
    apollo: createTheme(apolloTheme),
    masculinePastel: createTheme(masculinePastelTheme),
};

export default themes;