import { useState } from "react";
import { Search, Filter, Plus, Download, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const incomeData = [
  { name: "Brand Deal - TechCorp", entries: 1, total: 3847, type: "Brand Deal", status: "Completed" },
  { name: "Amazon Affiliate", entries: 24, total: 892, type: "Affiliate", status: "Active" },
  { name: "YouTube Ad Revenue", entries: 1, total: 1247, type: "Platform", status: "Completed" },
  { name: "Client - Design Work", entries: 3, total: 2100, type: "Client Work", status: "In Progress" },
  { name: "Ko-fi Donations", entries: 18, total: 340, type: "Donations", status: "Active" },
  { name: "Course Sales", entries: 7, total: 1890, type: "Products", status: "Active" },
];

export function IncomeTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredData = incomeData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFilter === "All" || item.type === selectedFilter)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success/20 text-success-foreground border-success/30";
      case "Active":
        return "bg-accent/20 text-accent-foreground border-accent/30";
      case "In Progress":
        return "bg-warning/40 text-warning-foreground border-warning/50";
      default:
        return "bg-secondary";
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Income Sources</h2>
            <p className="text-sm text-muted-foreground">{filteredData.length} results</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="default" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Source
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search income sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full border-border/50"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <Filter className="mr-2 h-4 w-4" />
                {selectedFilter}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedFilter("All")}>All</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("Brand Deal")}>Brand Deals</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("Affiliate")}>Affiliate</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("Platform")}>Platform</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedFilter("Client Work")}>Client Work</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50">
              <TableHead className="font-semibold">Source</TableHead>
              <TableHead className="font-semibold text-center">Entries</TableHead>
              <TableHead className="font-semibold text-center">Total</TableHead>
              <TableHead className="font-semibold text-center">Status</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                <TableCell>
                  <div className="space-y-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                </TableCell>
                <TableCell className="text-center font-medium">{item.entries}</TableCell>
                <TableCell className="text-center font-semibold">${item.total.toLocaleString()}</TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline" className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}