import { Binding, PersistButton } from "~/lib/binding";
import { Slots } from "~/lib/layout";
import { PageForm } from "../components/forms/page-form";
import {
  EntitySubTree,
  Field,
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
  DataGridToolbar,
} from "~/lib/datagrid";
import { SquarePenIcon } from "lucide-react";

export const Create = () => {
  return (
    <>
      <Binding>
        <Slots.Actions>
          <PersistButton label="Uložit" />
        </Slots.Actions>
        <Slots.Title>Vytvořit stránku</Slots.Title>
        <Slots.Back>
          <BackButton />
        </Slots.Back>
        <EntitySubTree entity="Page" isCreating>
          <RedirectOnPersist to="page/edit(id: $entity.id)" />
          <PageForm />
        </EntitySubTree>
      </Binding>
    </>
  );
};

export const Edit = () => {
  return (
    <>
      <Binding>
        <Slots.Actions>
          <PersistButton label="Uložit" />
        </Slots.Actions>
        <Slots.Title>Upravit stránku</Slots.Title>
        <Slots.Back>
          <BackButton />
        </Slots.Back>
        <EntitySubTree entity="Page(id = $id)">
          <PageForm />
        </EntitySubTree>
      </Binding>
    </>
  );
};

export default () => {
  return (
    <>
      <Binding>
        <Slots.Actions>
          <Link to="page/create">
            <AnchorButton>Vytvořit Stránku</AnchorButton>
          </Link>
        </Slots.Actions>
        <Slots.Title>Seznam Stránek</Slots.Title>
        <Slots.Back>
          <BackButton />
        </Slots.Back>
        <>
          <DataGrid entities="Page">
            <DataGridToolbar>
              <DataGridQueryFilter />
            </DataGridToolbar>
            <DataGridLoader>
              <DataGridTable>
                <DataGridColumn>
                  <div className="flex gap-4">
                    <Link to="page/edit(id: $entity.id)">
                      <Button variant="outline">
                        <SquarePenIcon size={16} />
                      </Button>
                    </Link>
                  </div>
                </DataGridColumn>
                <DataGridHasManyColumn header="Název" field="locales">
                  <Field field="title" />
                </DataGridHasManyColumn>
                <DataGridHasManyColumn header="URL" field="locales">
                  <Field field="url.url" />
                </DataGridHasManyColumn>
                <DataGridDateColumn header="Vytvořeno" field="createdAt" />
              </DataGridTable>
            </DataGridLoader>
            <DataGridPagination />
          </DataGrid>
        </>
      </Binding>
    </>
  );
};
