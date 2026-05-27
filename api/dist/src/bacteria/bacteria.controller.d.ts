import { BacteriaService } from './bacteria.service';
import { BacteriaDto } from './dto/bacteria.dto';
export declare class BacteriaController {
    private bacteriaService;
    constructor(bacteriaService: BacteriaService);
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }[]>;
    search(name: string): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    } | null>;
    create(data: BacteriaDto): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }>;
    update(id: string, data: BacteriaDto): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }>;
    delete(id: string): Promise<{
        id: number;
        name: string;
        description: string;
        gram: string;
    }>;
}
