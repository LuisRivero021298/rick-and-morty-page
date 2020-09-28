const getHash = () => {
 const hash = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
 return hash;
}
export default getHash;