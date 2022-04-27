import { v4 as uuidv4 } from 'uuid';

export type CategoryProperties = {
  name: string,
  is_active?: boolean,
  description?: string,
  created_at?: Date,
}

export class Category {
  public readonly id: string;
  constructor(public readonly props: CategoryProperties, id?: string) {
    this.id = id || uuidv4();
    this.description = this.props.description
    this.is_active = this.props.is_active;
    this.props.created_at = this.props.created_at ?? new Date();

  }
  get name(): string {
    return this.props.name;
  }
  get is_active(): boolean | undefined {
    return this.props.is_active;
  }
  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }
  get description(): string | undefined {
    return this.props.description;
  }
  private set description(value: string) {
    this.props.description = value ?? null;
  }
  get created_at(): Date | undefined {
    return this.props.created_at;
  }
}
