import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import {
  AddRounded,
  DownloadRounded,
  RefreshRounded,
} from "@mui/icons-material";
import { Button } from "@mui/material";

export const CustomToolbar = ({
  showAddButton = true,
  onAddButtonClick,
  showDownloadButton = false,
  onDowloadButtonClick,
  showRefreshButton = false,
  onRefreshButtonClick,
  disabledDownloadButton = false,
  disabledRefreshButton = false,
  showExportButton = false,
  showGridToolbarColumnButton = true,
}) => {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "background.paper",
        px: 2,
        py: 1,
      }}
    >
      <div>
        {showGridToolbarColumnButton && <GridToolbarColumnsButton />}
        {showExportButton && <GridToolbarExport />}
        <GridToolbarFilterButton />
        {showAddButton && (
          <Button onClick={onAddButtonClick} startIcon={<AddRounded />}>
            Add
          </Button>
        )}
        {showDownloadButton && (
          <Button
            onClick={onDowloadButtonClick}
            startIcon={<DownloadRounded />}
            disabled={disabledDownloadButton}
          >
            Download
          </Button>
        )}
        {showRefreshButton && (
          <Button
            disabled={disabledRefreshButton}
            onClick={onRefreshButtonClick}
            startIcon={<RefreshRounded />}
          >
            Refresh
          </Button>
        )}
      </div>
      <GridToolbarQuickFilter
        sx={{
          borderRadius: 1,
          p: 1,
          backgroundColor: "background.bg",
        }}
      />
    </GridToolbarContainer>
  );
};
