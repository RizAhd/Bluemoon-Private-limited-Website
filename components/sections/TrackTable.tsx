import { formatLKRFull } from "@/lib/currency";
import type { TrackRecordItem } from "@/lib/types";

/** Contract table; each row stacks into one item on phones. */
export function TrackTable({ rows, hideHead = false }: { rows: TrackRecordItem[]; hideHead?: boolean }) {
  return (
    <table className="ttable">
      <thead className={hideHead ? "sr-only" : undefined}>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Client</th>
          <th scope="col" className="ttable__cat">
            Category
          </th>
          <th scope="col">Year</th>
          <th scope="col" className="num">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.project}>
            <td className="ttable__name">{row.project}</td>
            <td className="ttable__meta">{row.client}</td>
            <td className="ttable__cat">{row.category}</td>
            <td className="ttable__meta">{row.year}</td>
            <td className="num mono">{formatLKRFull(row.valueLKR)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
