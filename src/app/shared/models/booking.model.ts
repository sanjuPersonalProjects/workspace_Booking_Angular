export class Workspace {
    row: number;  // Row index of the workspace
    column: number;  // Column index of the workspace
    isTaken: boolean;  // Indicates if the workspace is currently occupied
    isBooked: boolean;  // Indicates if the workspace is booked for a future reservation
    isSelected: boolean;  // Indicates if the workspace is currently selected by the user
    isFree: boolean;  // Indicates if the workspace is available for use
    isUnavailable: boolean;  // Indicates if the workspace is marked as unavailable
    userId: string | undefined;  // User ID if the workspace is occupied
    roomCode: string | undefined;  // Room code where the workspace is located
    BookedWorkspace: number | undefined;  // Number assigned to the booked workspace
  
    constructor(row: number, column: number) {
      this.row = row;
      this.column = column;
      this.isTaken = false;  // Initialize as free
      this.isBooked = false;  // Initialize as not booked
      this.isSelected = false;  // Initialize as not selected
      this.isFree = true;  // Initially, the workspace is free
      this.isUnavailable = false;  // Initially, the workspace is available
      this.userId = undefined;  // No user assigned initially
      this.roomCode = undefined;  // No room code assigned initially
      this.BookedWorkspace = undefined;  // No workspace number assigned initially
    }
  }
  export class Room {
      // Code to identify the room (e.g., 'A', 'B', etc.)
    isFull: boolean;  // Flag to indicate if the room is full
    optionsLeft: number;  // Number of available options left in the room
    rows: number[];  // Array to represent row indices
    cols: number[];  // Array to represent column indices
    workspaces: Workspace[][];  // 2D array of Workspaces representing the layout of the room
  
    constructor() {
      
      this.isFull = false;
      this.optionsLeft = -1;  // -1 indicates an undefined number of options
      this.rows = [0, 1, 2, 3, 4];  // Assuming a fixed layout of 5 rows
      this.cols = [0, 1, 2, 3, 4];  // Assuming a fixed layout of 5 columns
      this.workspaces = this.initializeWorkspaces();  // Initialize the workspace layout
    }
  
    // Method to create and initialize the workspaces
    private initializeWorkspaces(): Workspace[][] {
      const workspaces: Workspace[][] = [];
      for (let row = 0; row < this.rows.length; row++) {
        const workspaceRow: Workspace[] = [];
        for (let col = 0; col < this.cols.length; col++) {
          workspaceRow.push(new Workspace(row, col));  // Create new Workspace for each cell
        }
        workspaces.push(workspaceRow);  // Add the row of workspaces to the main array
      }
      return workspaces;
    }
  
    // Method to get the cell number (1-based) based on the row and column indices
    getCellNumber(rowIndex: number, colIndex: number): number {
      return rowIndex * this.cols.length + colIndex + 1;
    }
  }
    