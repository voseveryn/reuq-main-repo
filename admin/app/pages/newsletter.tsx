import { Binding, PersistButton } from "~/lib/binding";
import { Slots } from "~/lib/layout";
import { PageForm } from "../components/forms/page-form";
import {
  EntitySubTree,
  Field,
  FieldView,
  Link,
  RedirectOnPersist,
} from "@contember/interface";
import { AnchorButton, Button } from "~/lib/ui/button";
import { BackButton } from "~/lib/buttons";
import {
  DataGrid,
  DataGridColumn,
  DataGridDateColumn,
  DataGridHasManyColumn,
  DataGridLoader,
  DataGridPagination,
  DataGridQueryFilter,
  DataGridTable,
  DataGridTextColumn,
  DataGridToolbar,
} from "~/lib/datagrid";
import { SquarePenIcon } from "lucide-react";

export default () => {
  return (
    <>
      <Binding>
        <Slots.Title>Seznam odběratelů</Slots.Title>
        <>
          <DataGrid entities="Newsletter">
            <DataGridToolbar>
              <DataGridQueryFilter />
            </DataGridToolbar>
            <DataGridLoader>
              <DataGridTable>
                <DataGridDateColumn field="createdAt" header="Vytvořeno:" />
                <DataGridTextColumn field="mail" header="Email" />
                </DataGridTable>
            </DataGridLoader>
            <DataGridPagination />
          </DataGrid>
        </>
      </Binding>
    </>
  );
};
