import Input from "../../../components/ui/Input";
import { SearchProps } from "./types";
import styles from "../GitRepo.module.scss";
import Button from "../../../components/ui/Button";
const Search = ({ handleSearch, handleOnChange }: SearchProps) => {
  return (
    <form className={styles.Container__form} onSubmit={handleSearch}>
      <Input
        isRequired
        type="text"
        height="35px"
        placeholder="Enter username"
        name="search"
        width="240px"
        onChange={handleOnChange}
      />
      <Button text="Search" width="250px" height="40px" />
    </form>
  );
};

export default Search;
