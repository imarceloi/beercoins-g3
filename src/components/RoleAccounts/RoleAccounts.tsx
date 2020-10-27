import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RoleAccountsModal from "./RoleAccountsModal";
import RoleAccountsService from "../../services/RoleAccounts/roleaccounts.service";
import { useToasts } from "react-toast-notifications";
import TableLoading from "../TableLoading";
import Button from "@material-ui/core/Button";
import { StyledTableRow } from "../StyledTableRow/StyledTableRow";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const roleAccountsService = new RoleAccountsService();

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  seeMore: {
    marginTop: theme.spacing(3),
    maxWidth: "200px",
  },
  tableHeadItem: {
    fontWeight: "bold",
  },
  margin: {
    margin: theme.spacing(1),
    width: 300,
  },
}));

function Accounts() {
  const [accountList, setAccount] = useState<IRoleAccount[]>([]);
  const [search, setSearch] = useState<any>("");
  const [loading, setLoading] = React.useState(false);
  const { addToast } = useToasts();

  const seeMore = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    roleAccountsService
      .getAccounts()
      .then((response) => {
        setAccount(response);
        JSON.stringify(response);
      })
      .catch((error) => {
        addToast("Erro ao carregar a lista de contas", {
          appearance: "error",
        });
      });
  }, [addToast]);

  const accountFiltered = accountList.filter((account) => {
    return account.nome.toLowerCase().includes(search.toLowerCase());
  });

  const accounts = accountFiltered.map((account, index) => (
    <StyledTableRow key={account.id}>
      <TableCell align="left">{account.id}</TableCell>
      <TableCell align="left">{account.nome}</TableCell>
      <TableCell align="left">{account.email}</TableCell>
      <TableCell align="left">{account.cnpj}</TableCell>
      <TableCell align="left">
        <RoleAccountsModal setAccount={setAccount} account={account} />
      </TableCell>
    </StyledTableRow>
  ));

  const classes = useStyles();

  return (
    <React.Fragment>
      <h1>Alterar permissões de usuário</h1>

      <div>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Buscar Contas por nome"
          variant="outlined"
          onChange={(event) => setSearch(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <TableContainer>
        <Table className={classes.table} aria-label="Accounts table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.tableHeadItem}>
                #
              </TableCell>
              <TableCell align="left" className={classes.tableHeadItem}>
                Nome
              </TableCell>
              <TableCell align="left" className={classes.tableHeadItem}>
                E-mail
              </TableCell>
              <TableCell align="left" className={classes.tableHeadItem}>
                CNPJ
              </TableCell>
              <TableCell align="left" className={classes.tableHeadItem}>
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{!accountList.length || loading ? <TableLoading colsPan={6} items={3} /> : accounts}</TableBody>
        </Table>
      </TableContainer>
      <div className={classes.seeMore}>
        <Button variant="contained" color="primary" onClick={() => seeMore()} disabled={loading}>
          Ver mais
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Accounts;
