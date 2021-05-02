import styled from 'styled-components'


export const IconButtonStyle = styled.div`
  :root{
    padding: '2px 4px';
    display: 'flex';
    align-items: 'center';
    width: 400;
    color: #fff;
    
  }

  .iconButton{
    color: #fff;
  }


  input{
    margin-left: spacing();
    flex: 1;
    color: #fff;
  }

  &&{
    padding: 10;
    color: #fff;
  }
`

// const useStyles = makeStyles((theme: Theme) =>
// createStyles({
//   root: {
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     width: 400,
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     height: 28,
//     margin: 4,
//   },
// }),