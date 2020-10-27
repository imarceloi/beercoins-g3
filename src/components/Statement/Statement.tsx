import React, { useState, useEffect, memo } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useAuthContext } from "../../context/Auth";
import { GetStatement } from "../../services/User/User";
import "./Statement.scss";
import { formatCurrency, formatBankPost } from "../../utils/formaters/formaters";
import { useToasts } from "react-toast-notifications";
import TableLoading from "../TableLoading";
import { StyledTableRow } from "../StyledTableRow/StyledTableRow";

interface IProps {}

const renderTable = (statement: IStatement[] | null) => {
  if (statement) {
    if (statement.length) {
      return statement
        .sort((a, b) => {
          if (a.horarioOperacao < b.horarioOperacao) return 1;
          else if (a.horarioOperacao > b.horarioOperacao) return -1;
          return 0;
        })
        .map((bankPost, index) => (
          <StyledTableRow key={index + bankPost.hash}>
            <TableCell align="left">{formatBankPost(bankPost.debitCredit)}</TableCell>
            <TableCell align="center">{bankPost.horarioOperacao}</TableCell>
            <TableCell align="right">{formatCurrency(bankPost.valorOperacao)}</TableCell>
          </StyledTableRow>
        ));
    } else {
      return (
        <TableRow className="statement-empty">
          <TableCell colSpan={3} align="center">
            Você ainda não possui lançamentos
          </TableCell>
        </TableRow>
      );
    }
  }

  return <TableLoading colsPan={3} items={3} />;
};

function Statement(props: IProps) {
  const { userInfo } = useAuthContext();
  const [statement, setStatement] = useState<IStatement[] | null>(null);
  const { addToast } = useToasts();

  type Order = "asc" | "desc";

  useEffect(() => {
    async function getDataFn() {
      try {
        const resultStatement = await GetStatement({
          token: userInfo.accessToken,
        });
        setStatement(resultStatement);
      } catch (error) {
        addToast("Erro ao carregar o extrato", {
          appearance: "error",
        });
      }
    }
    getDataFn();
  }, [addToast, userInfo]);

  return (
    <TableContainer>
      <Table className="statement" aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Transação</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTable(statement)}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default memo(Statement);
