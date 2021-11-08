export enum Direction {
    Top = 16,
    Left = 2,
    Bottom = 8,
    Right = 4
}

export default interface ISwipeEvent {
    direction: Direction
}