export interface IProjectProps {
	Name: string;
	Description: string;
	Image: string;
	Url: string;
	TechStack: ITechStack[];
}

export interface ITechStack {
    Key: number;
	Name: string;
	Avatar: string;
	Color: "default" | "primary" | "secondary";
}
