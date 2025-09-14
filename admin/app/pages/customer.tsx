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
        <Slots.Title>Seznam Zákazníků</Slots.Title>
        <>
          <DataGrid entities="Customer">
            <DataGridToolbar>
              <DataGridQueryFilter />
            </DataGridToolbar>
            <DataGridLoader>
              <DataGridTable>
                <DataGridColumn header="Jméno">
                    <FieldView fields={['name', 'lastName']} render={(name, lastName) => (<>{`${name.value} ${lastName.value}`}</>)} />
                </DataGridColumn>
                <DataGridTextColumn field="phoneNumber" header="Telefonní číslo" />
                <DataGridTextColumn field="email" header="Email" />
                <DataGridDateColumn field="date" header="Datum vzniku" />
                </DataGridTable>
            </DataGridLoader>
            <DataGridPagination />
          </DataGrid>
        </>
      </Binding>
    </>
  );
};
