import { useState } from "react";
import { Search, Filter, Plus, Download } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

const previewData = [
  { name: "Amazon", entries: 3, total: 278, type: "Affiliate" },
  { name: "Client", entries: 4, total: 4130, type: "Client Work" },
  { name: "Client Work", entries: 1, total: 100, type: "Freelance" },
  { name: "CreatorCon", entries: 1, total: 890, type: "Event" },
  { name: "Consulting", entries: 1, total: 3194.13, type: "Services" },
  { name: "Deborah PR", entries: 1, total: 2000, type: "Brand Deal" },
];

export function AppPreview() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = previewData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            This is where your income becomes insight
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just track. Understand. See patterns, spot opportunities, and make data-backed decisions about your creator business.
          </p>
        </div>

        {/* App Interface Preview */}
        <Card className="border-0 shadow-xl bg-background/95 backdrop-blur overflow-hidden">
          <CardHeader className="pb-4 bg-background/50">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Income Sources</h3>
                <p className="text-sm text-muted-foreground">{filteredData.length} results</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button variant="default" size="sm" className="rounded-full bg-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-full border-border/50 bg-background/80"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="font-semibold text-foreground">NAME</TableHead>
                  <TableHead className="font-semibold text-foreground text-center"># OF ENTRIES</TableHead>
                  <TableHead className="font-semibold text-foreground text-center">TOTAL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/30 transition-colors border-border/20">
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{item.name}</p>
                        <Badge variant="outline" className="text-xs bg-secondary/50 text-secondary-foreground border-secondary">
                          {item.type}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-medium text-foreground">{item.entries}</TableCell>
                    <TableCell className="text-center font-bold text-foreground">{item.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Pagination */}
            <div className="flex items-center justify-between p-6 border-t border-border/30 bg-muted/20">
              <p className="text-sm text-muted-foreground">
                Results 1-10 of 8
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled className="rounded-full">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            The financial tool creators use before they scale
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            You built the brand. Now get the system that helps you grow the wealth.
          </p>
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-base font-semibold rounded-full"
          >
            Start Your Financial Intelligence
          </Button>
        </div>
      </div>
    </section>
  );
}