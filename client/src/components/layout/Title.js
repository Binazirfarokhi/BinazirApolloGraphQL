const getStyles = () => ({
  title: {
    fontSize: 50,
    padding: '15px',
    marginBottom: '2px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

const Title = () => {
  const styles = getStyles();
  return <h1 style={styles.title}>People and their cars</h1>;
};

export default Title;
