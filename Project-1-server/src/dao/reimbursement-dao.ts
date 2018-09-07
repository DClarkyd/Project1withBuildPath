import { connectionPool } from "../util/connection-util";
import { Reimbursement } from "../model/reimbursement";
import { reimbursementConverter } from "../util/reimbursement-converter";
import { SqlReimbursement } from "../dto/sql-reimbursement";

/**
 * Retreive all movies from the database
 */
export async function findAll(): Promise<Reimbursement[]> {
  const client = await connectionPool.connect();
  try {
    const resp = await client.query('SELECT * FROM expense_reimbursement.reimbursement_info');
    return resp.rows.map(reimbursementConverter);
  } finally {
    client.release();
  }
}

/**
 * Retreive a reimbursement by its id
 * @param id 
 */
export async function findById(id: number): Promise<Reimbursement> {
  const client = await connectionPool.connect();
  try {
    const resp = await client.query('SELECT * FROM expense_reimbursement.reimbursement_info WHERE reimb_id = $1', [id]);
    let reimbursement: SqlReimbursement = resp.rows[0];
    if (reimbursement !== undefined) {
      return reimbursementConverter(reimbursement);
    } else {
      return undefined;
    }
  } finally {
    client.release();
  }
}

/**
 * Add a new reimbursement to the DB
 * @param reimbursement
 */
export async function createReimbursement(reimbursement): Promise<number> {
  const client = await connectionPool.connect();
  try {
    const resp = await client.query(
      `INSERT INTO expense_reimbursement.reimbursement_info 
        (reimb_amount, reimb_description, reimb_author, reimb_type_id, reimb_status_id, reimb_resolver)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING reimb_id`, [reimbursement.reimbAmount, reimbursement.reimbDescription, reimbursement.reimbAuthor, reimbursement.reimbType, 0, 1]);
        return 0
        // console.log(resp.rows[0].reimbursementId)
        // return resp.rows[0].reimbursementId;
  } finally {
    client.release();
  }
}