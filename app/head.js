
const Head = ({ title }) => (
  <>
    <title>{title ? `${title} - Motta` : 'Motta'}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>
);

export default Head;
